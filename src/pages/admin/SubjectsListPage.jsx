// src/pages/admin/SubjectsListPage.jsx
import React from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Eye, Pencil, Trash } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// This component will receive 'subjects' and 'deleteSubject' from App.jsx via the Route
export default function SubjectsListPage({ subjects, deleteSubject }) {
  const navigate = useNavigate();

  const handleCreateSubjectClick = () => {
    navigate('/admin/subjects/new'); // Updated path for creating new subjects
  };

  const handleViewAllSubjectsClick = () => {
    alert('View All Subjects (Functionality not fully implemented)');
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      deleteSubject(id);
      alert(`Subject ${id} deleted.`);
    }
  };

  const handleEdit = (subjectId) => {
    alert(`Edit functionality for Subject ID: ${subjectId} (Not fully implemented)`);
    // navigate(`/admin/subjects/edit/${subjectId}`); // Example for future edit route
  };

  const handleView = (subjectId) => {
    alert(`View details for Subject ID: ${subjectId} (Not fully implemented)`);
  };

  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-3xl font-bold mb-2 text-gray-800">Subjects</h2>
      <p className="text-gray-600 mb-8">Manage your Subjects and settings</p>

      <div className="relative mb-6 max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search Subjects"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[300px] text-gray-600 font-semibold">Subject Name</TableHead>
              <TableHead className="text-right text-gray-600 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects && subjects.length > 0 ? ( // Added null/undefined check for subjects
              subjects.map((subject) => (
                <TableRow key={subject.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800">{subject.name}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100" onClick={() => handleView(subject.id)}>
                        <Eye className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100" onClick={() => handleEdit(subject.id)}>
                        <Pencil className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50" onClick={() => handleDelete(subject.id)}>
                        <Trash className="h-5 w-5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-4 text-gray-500">
                  No subjects found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex space-x-4">
        <Button
          onClick={handleCreateSubjectClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base shadow-sm"
        >
          Create Subject
        </Button>
        <Button
          onClick={handleViewAllSubjectsClick}
          variant="outline"
          className="border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base hover:bg-gray-100 shadow-sm"
        >
          View All Subject
        </Button>
      </div>
    </div>
  );
}