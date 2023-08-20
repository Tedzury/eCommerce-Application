import { Link } from 'react-router-dom';

import { PropsType } from '../types';

export default function NavBlock(props: PropsType) {
  const { backFunc, nextFunc, isNextEnabled, isFirstStep, isLoading } = props;

  return (
    <div
      className="
        mb-6 
        mt-12
        flex 
        w-full
        items-center 
        justify-between
        gap-4 
        pl-4
        pr-4
        font-poppins
        text-text-grey
      "
    >
      <button
        type="button"
        className="h-10 rounded-lg p-2 disabled:opacity-20"
        onClick={backFunc}
        disabled={isFirstStep}
      >
        Back
      </button>
      <p className="text-center text-xs sm:leading-10">
        Already have an account?{' '}
        <Link className="font-bold text-accent" to="/login">
          Log in
        </Link>
      </p>
      <button
        type="submit"
        className={`h-10 rounded-lg bg-accent p-2 text-primary disabled:bg-separation-line disabled:text-text-grey ${
          isLoading ? 'animate-pulse' : ''
        }`}
        onClick={nextFunc}
        disabled={!isNextEnabled || isLoading}
      >
        Continue
      </button>
    </div>
  );
}
