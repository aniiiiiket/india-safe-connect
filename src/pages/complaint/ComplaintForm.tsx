
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Upload } from 'lucide-react';

const ComplaintForm = () => {
  const [step, setStep] = useState(1);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-police-navy mb-6">File a Complaint</h1>
          
          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-police-saffron rounded-full transition-all"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Personal Info</span>
              <span>Identity</span>
              <span>Details</span>
              <span>Evidence</span>
              <span>Review</span>
            </div>
          </div>

          <Tabs defaultValue="1" className="w-full" value={step.toString()}>
            <TabsContent value="1">
              <div className="space-y-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Contact Number" />
                <Input placeholder="Email Address" />
                <Textarea placeholder="Residential Address" />
                <Button onClick={() => setStep(2)} className="w-full">Next</Button>
              </div>
            </TabsContent>

            <TabsContent value="2">
              <div className="space-y-4">
                <Input placeholder="Aadhar Card Number" />
                <Input type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-police-navy file:text-white hover:file:bg-police-navy/90" />
                <Button onClick={() => setStep(3)} className="w-full">Next</Button>
              </div>
            </TabsContent>

            <TabsContent value="3">
              <div className="space-y-4">
                <select className="w-full border rounded-md p-2">
                  <option>Select Crime Type</option>
                  <option>Theft</option>
                  <option>Assault</option>
                  <option>Cybercrime</option>
                </select>
                <Input type="datetime-local" />
                <Textarea placeholder="Describe the incident in detail..." />
                <Button onClick={() => setStep(4)} className="w-full">Next</Button>
              </div>
            </TabsContent>

            <TabsContent value="4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2">Drag and drop files here or click to browse</p>
                <p className="text-sm text-gray-500 mt-1">Supported formats: PDF, JPG, MP4 (Max 50MB)</p>
                <Button variant="outline" className="mt-4">Browse Files</Button>
              </div>
              <Button onClick={() => setStep(5)} className="w-full mt-4">Next</Button>
            </TabsContent>

            <TabsContent value="5">
              <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">Review your complaint</h3>
                {/* Add summary of all fields here */}
                <Button className="w-full bg-police-green text-white hover:bg-police-green/90">
                  <FileText className="mr-2 h-4 w-4" />
                  Submit Complaint
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ComplaintForm;
