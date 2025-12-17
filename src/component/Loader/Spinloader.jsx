

function Spinloader({ hide }) {
    return (
        <div
            className={`
              fixed inset-0 z-50 flex items-center justify-center bg-blue 
              transition-opacity duration-700 bg-brandLight dark:bg-brandDark
              ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
        >
            {/* Loader spinner */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 
            border-t-brandGreen"></div>
        </div>
    );
}


export default Spinloader