// src/pages/admin/CreateSubjectPage.jsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

// This component will receive 'addSubject' from App.jsx via the Route
const CreateSubjectPage = ({ addSubject }) => {
  const navigate = useNavigate();

  const [subjectName, setSubjectName] = useState('');
  const [credits, setCredits] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [totalCredit, setTotalCredit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subjectName || !credits || !facultyName || !totalCredit) {
      alert('Please fill in all fields.');
      return;
    }

    const newSubject = {
      name: subjectName,
      credits: parseInt(credits),
      faculty: facultyName,
      totalCredit: parseInt(totalCredit),
    };

    addSubject(newSubject);
    alert('Subject created successfully!');
    navigate('/admin/subjects'); // Updated navigation path
  };

  const handleCancel = () => {
    navigate('/admin/subjects'); // Updated navigation path
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Subject</h2>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div>
          <Label htmlFor="subjectName" className="text-gray-700">Subject Name</Label>
          <Input
            id="subjectName"
            type="text"
            placeholder="e.g. Science"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="credits" className="text-gray-700">Credits</Label>
          <Input
            id="credits"
            type="number"
            placeholder="e.g. 3"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="facultyName" className="text-gray-700">Faculty Name</Label>
          <Input
            id="facultyName"
            type="text"
            placeholder="e.g. John Doe"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="totalCredit" className="text-gray-700">Total Credit</Label>
          <Input
            id="totalCredit"
            type="number"
            placeholder="e.g. 60"
            value={totalCredit}
            onChange={(e) => setTotalCredit(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base shadow-sm">
            Submit
          </Button>
          <Button type="button" variant="outline" onClick={handleCancel} className="border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base hover:bg-gray-100 shadow-sm">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateSubjectPage;