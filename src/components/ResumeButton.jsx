export default function ResumeButton() {
  return (
    <div>
      <a
        href="/MichaelZandonellaResume.pdf"
        download
        className="group flex items-center gap-2 rounded-xl bg-gray-950 p-3 px-4 outline-1 outline-gray-700 transition-colors duration-200 hover:z-50 hover:bg-gray-900 hover:shadow-[0px_0px_30px_20px] hover:ring-2 hover:shadow-indigo-950/50 hover:ring-indigo-900 focus-visible:z-50 focus-visible:bg-gray-900 focus-visible:shadow-[0px_0px_30px_20px] focus-visible:ring-2 focus-visible:shadow-indigo-950/50 focus-visible:ring-indigo-900"
      >
        <span className="">Resume</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:animate-bounceOrig h-5 w-5 stroke-white transition-colors duration-200 group-hover:stroke-indigo-500"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </a>
    </div>
  );
}
