import React, { useState } from 'react';

const YouthDocs = () => {
  const [docs, setDocs] = useState([
    { id: 1, title: 'Project Proposal', date: '2024-05-10' },
    { id: 2, title: 'Semester Notes', date: '2024-05-12' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-tight">YouthDocs</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
          + New Document
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-10 p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Your Recent Documents</h2>
        
        <div className="grid gap-4">
          {docs.map(doc => (
            <div key={doc.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between hover:border-blue-400 cursor-pointer transition">
              <div>
                <p className="font-medium text-gray-900">{doc.title}</p>
                <p className="text-sm text-gray-500">Last edited: {doc.date}</p>
              </div>
              <span className="text-blue-500">View →</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default YouthDocs;