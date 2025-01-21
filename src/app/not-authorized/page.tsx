import Navbar from '@/components/Navbar';

export default function NotAuthorizedPage() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center py-24'>
        <div className='border p-5 rounded shadow-md'>
          <p className='text-gray-700 dark:text-gray-200'>
            You are not authorized to access the app, Please contact admin!
          </p>
        </div>
      </div>
    </>
  );
}
