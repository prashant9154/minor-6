import { LockClosedIcon } from '@heroicons/react/solid';
import { getCandidates } from '../../actions/smartContract';

const Step1 = props => {
  return (
    <div>
      <div className='min-h-screen flex items-start justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Vote Here
            </h2>
            <p className='font-medium mt-2 text-center text-sm text-indigo-600'>
              Please enter the Ethereum Id{' '}
            </p>
          </div>
          <form className='mt-8 space-y-9' action='#' method='GET'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm space-y-1'>
              <div>
                <label htmlFor='EthereumId' className='sr-only'>
                  Ethereum Id
                </label>
                <input
                  id='EthereumId'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Enter Your Ethereum Id'
                  value={props.ethereumId}
                  onChange={e => {
                    props.setEthereumId(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={async e => {
                  e.preventDefault();
                  console.log('My ethereum Id', props.ethereumId);
                  const res = await getCandidates(props.ethereumId);
                  if (res == 'You are not authorized to vote')
                    alert('You are not authorized to vote');
                  else {
                    props.setCandidates(res);
                    props.setStep(2);
                  }
                }}
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
