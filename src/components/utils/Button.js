export const Button = ({ children, coloured = false, href }) => (
  <button className={`${coloured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white text-gray-800 hover:bg-gray-100'} py-2 px-8 rounded-lg shadow-lg font-medium focus:outline-none transition-colors duration-200`} onClick={() => goTo(href)}>
    {children}
  </button>
);

const goTo = (link) => window.open(link, '_blank');