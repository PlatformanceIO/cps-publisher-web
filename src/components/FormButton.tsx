'use client';
import { useFormStatus } from 'react-dom';
interface FormButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export default function FormButton(props: FormButtonProps) {
  const status = useFormStatus();
  return (
    <button type='submit' size='sm' className='min-w-[120px]' {...props}>
      {!status.pending ? props.text : 'loading...'}
    </button>
  );
}
