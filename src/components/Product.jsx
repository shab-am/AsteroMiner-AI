import React from 'react'

const Product = () => {
  return (
    <div className="pt-8 px-6 mt-[4rem]">
      <div className="max-w-6xl mx-auto mb-[5rem]">
        <div className="grid md:grid-cols-[1fr,1fr] gap-6">
          <div className="text-white space-y-4 mt-9">
            <h1 className="text-3xl font-bold text-purple-400 bg-clip-text text-transparent">
              AsteroMiner AI 🌌🤖
            </h1>
            <h2 className="text-xl text-purple-300">Your Gateway to Asteroid Mining!</h2>

            <p className="text-base text-gray-300">
              Unlock the cosmos with AsteroMiner AI, merging advanced tech, AI, and real-time data for smarter, more efficient asteroid mining.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-purple-300">Discover AsteroMiner AI:</h3>
              <ul className="text-base space-y-1 text-gray-300">
                <li>✨ Analyze asteroids to find prime mining targets.</li>
                <li>🌌 Access real-time data from top space agencies.</li>
                <li>🔍 Get personalized mining strategies for optimal results.</li>
                <li>📈 Receive feasibility reports on material value and costs.</li>
                <li>🛠️ Plan missions with automated tools and equipment suggestions.</li>
                <li>🌍 Promote sustainable, responsible mining practices.</li>
              </ul>
            </div>

            <p className="text-lg font-semibold text-purple-300">
              Join the future of space mining with AsteroMiner AI! 🚀🌠
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Asteroid Parameters</h2>
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-md text-purple-300">Wavelength Range</label>
                <input
                  type="text"
                  placeholder="400-700 nm"
                  className="w-[80%] p-3 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  aria-label="Wavelength Range"
                />
              </div>
              <div className="space-y-1">
                <label className="text-md text-purple-300">Normalized Reflectance</label>
                <input
                  type="text"
                  placeholder="0.25, 0.35, 0.45"
                  className="w-[80%] p-3 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  aria-label="Normalized Reflectance"
                />
              </div>
              <div className="space-y-1">
                <label className="text-md text-purple-300 block w-[80%]">Spectral Class</label>
                <input
                  type="text"
                  placeholder="C-type, S-type, or M-type"
                  className="w-[80%] p-3 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  aria-label="Spectral Class"
                />
              </div>
              <div className="space-y-1">
                <label className="text-md text-purple-300">Orbital Semi-Major Axis</label>
                <input
                  type="text"
                  placeholder="2.77 AU"
                  className="w-[80%] p-3 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  aria-label="Orbital Semi-Major Axis"
                />
              </div>
              <div className="space-y-1">
                <label className="text-md text-purple-300">Absolute Magnitude</label>
                <input
                  type="text"
                  placeholder="16.7"
                  className="w-[80%] p-3 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  aria-label="Absolute Magnitude"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[93vw] mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Asteroid Details</h3>
          </div>
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Visualization</h3>
          </div>
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Mining Instructions</h3>
          </div>
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Cost Estimation</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product