"use client";

export default function Skills() {
    return (
        <div>
            <div className="w-full flex items-start justify-center my-5">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
                    Skills
                </h1>
            </div>
            <div className="flex w-full items-center">
                <div className="w-[20%]" />
                <div className="w-[20%] flex items-center justify-center">

                    <h1 className="text-lg md:text-2xl font-bold text-left text-black dark:text-white mb-5 ml-5 z-100">
                        Languages
                    </h1>

                </div>
                <div className="w-[10%]" />
                <div className="mb-5 flex space-x-4 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm z-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <img src="javapic.jpeg" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="Java" />
                    <img src="python2.jpeg" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="Python" />
                    <img src="sql2.png" className="w-22 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="SQL" />
                </div>
                <div className="w-[5%]" />
            </div>
            <div className="flex w-full items-center">

                <div className="w-[5%]" />
                <div className="w-[70%] flex items-center">

                </div>
                <div className="w-[5%]" />
            </div>
            <div className="flex w-full items-center">
                <div className="w-[20%]" />
                <div className="w-[20%] flex items-center justify-center">
                    <h1 className="text-lg md:text-2xl font-bold text-left text-black dark:text-white mb-5 ml-17 z-100">
                        Web Development
                    </h1>
                </div>
                <div className="w-[5%]" />
                <div className="mb-5 flex space-x-4 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm z-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <img src="html.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="html" />
                    <img src="css.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="css" />
                    <img src="javascript.jpeg" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="javasc" />
                    <img src="react.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="react" />
                    <img src="node.png" className="w-14 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="node" />
                    <img src="express.png" className="w-14 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="express" />
                    <img src="next.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="next" />
                    <img src="mongodb.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="mongo" />
                    <img src="firebase2.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="firebase" />
                </div>
                <div className="w-[5%]" />
            </div>
            <div className="flex w-full items-center">
                <div className="w-[20%]" />
                <div className="w-[20%] flex items-center justify-center">
                    <h1 className="text-lg md:text-2xl font-bold text-left text-black dark:text-white mb-5 ml-17 z-100">
                        Libraries and Frameworks
                    </h1>
                </div>
                <div className="w-[10%]" />
                <div className="mb-5 flex space-x-4 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm z-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <img src="numpy.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="numpy" />
                    <img src="pandas.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="pandas" />
                    <img src="matplotlib.png" className="w-17 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="mat" />
                </div>
                <div className="w-[5%]" />
            </div>
            <div className="flex w-full items-center">
                <div className="w-[20%]" />
                <div className="w-[20%] flex items-center justify-center">
                    <h1 className="text-lg md:text-2xl font-bold text-left text-black dark:text-white mb-10 ml-15 z-100">
                        Tools and Technologies
                    </h1>
                </div>
                <div className="w-[10%]" />
                <div className="mb-5 flex space-x-4 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm z-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <img src="git.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="git" />
                    <img src="postman2.png" className="w-15 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="postman" />
                    <img src="figma2.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="figma" />
                    <img src="gitHub.png" className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform duration-300" alt="gitHub" />
                </div>
                <div className="w-[5%]" />
            </div>
        </div>
    );
}