// src/pages/admin/CreateBatchPage.jsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

// This component will receive 'addBatch' from App.jsx via the Route
const CreateBatchPage = ({ addBatch }) => {
  const navigate = useNavigate();

  const [batchName, setBatchName] = useState('');
  const [year, setYear] = useState('');
  const [studentSize, setStudentSize] = useState('');
  const [totalCredit, setTotalCredit] = useState('');
  const [subjects, setSubjects] = useState([]);

  const availableSubjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
    'History', 'Geography', 'Literature', 'Art', 'Economics'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!batchName || !year || !studentSize || !totalCredit || subjects.length === 0) {
      alert('Please fill in all fields and select at least one subject.');
      return;
    }

    const newBatch = {
      name: batchName,
      year: parseInt(year),
      studentSize: parseInt(studentSize),
      totalCredit: parseInt(totalCredit),
      subjects: subjects,
    };

    addBatch(newBatch);
    alert('Batch created successfully!');
    navigate('/admin/batches'); // Updated navigation path
  };

  const handleCancel = () => {
    navigate('/admin/batches'); // Updated navigation path
  };

  const handleSubjectChange = (value) => {
    setSubjects(value ? [value] : []);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Batch</h2>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div>
          <Label htmlFor="batchName" className="text-gray-700">Batch Name</Label>
          <Input
            id="batchName"
            type="text"
            placeholder="e.g. Batch 2024"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="year" className="text-gray-700">Year</Label>
          <Input
            id="year"
            type="number"
            placeholder="e.g. 2024"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="studentSize" className="text-gray-700">Student Size</Label>
          <Input
            id="studentSize"
            type="number"
            placeholder="e.g. 100"
            value={studentSize}
            onChange={(e) => setStudentSize(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="totalCredit" className="text-gray-700">Total Credit</Label>
          <Input
            id="totalCredit"
            type="number"
            placeholder="e.g. 120"
            value={totalCredit}
            onChange={(e) => setTotalCredit(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="subjects" className="text-gray-700">Subjects</Label>
          <Select onValueChange={handleSubjectChange} value={subjects[0] || ''}>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select subjects" />
            </SelectTrigger>
            <SelectContent>
              {availableSubjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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

export default CreateBatchPage;