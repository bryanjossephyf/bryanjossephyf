function Footer() {
  return (
    <footer className="w-full border-t border-gray-500/50 h-14 sm:h-12 sm:rounded-t-lg opacity-50">
      <div className="w-full h-full flex items-center justify-between px-10">
        <div className="flex flex-col items-start opacity-50 max-w-[50%] lg:max-w-fit">
          <p className="items-center gap-1 flex sm:text-[10px]">
            Made with love
            <svg
              class="w-3 h-3 text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
            </svg>
            and ReactJS
          </p>
        </div>
        <div className="flex flex-col-reverse gap-3 items-end">
          <p className="opacity-50 flex sm:hidden">Last Update: May 14,2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



