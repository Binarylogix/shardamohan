import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function List() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchForms = async () => {
    try {
      const res = await axios.get("/api/healthform/getAllForms");
      setForms(res.data);
    } catch (error) {
      console.error("Failed to fetch forms:", error);
      Swal.fire("Error", "Unable to fetch form submissions", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const openModal = (form) => {
    setSelectedForm(form);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedForm(null);
    setShowModal(false);
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Submitted Forms</h2>

      {forms.length === 0 ? (
        <p className="text-center">No submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 ">#</th>
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2 ">Phone</th>
                <th className="px-4 py-2 ">Email</th>
                <th className="px-4 py-2 ">City</th>
                <th className="px-4 py-2 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form, index) => (
                <tr key={form._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{form.fullName}</td>
                  <td className="px-4 py-2 border">{form.phone}</td>
                  <td className="px-4 py-2 border">{form.email}</td>
                  <td className="px-4 py-2 border">{form.city}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => openModal(form)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* MODAL */}
      {showModal && selectedForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-4xl  text-gray-600 hover:text-red-500"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Submitted Profile Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {Object.entries(selectedForm).map(([key, value]) => {
                if (["_id", "__v"].includes(key)) return null;
                return (
                  <div key={key}>
                    <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>{" "}
                    <span className="text-gray-700">
                      {Array.isArray(value) ? value.join(", ") : value?.toString()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
