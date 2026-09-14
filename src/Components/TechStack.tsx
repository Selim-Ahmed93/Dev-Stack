import React, { useState } from "react";
import type { Technology } from "../types";
import { techData } from "../data";

interface Toast {
  message: string;
  type: "success" | "warning";
}

const TechStack: React.FC = () => {
  const [technologies] = useState<Technology[]>(techData);
  const [stack, setStack] = useState<Technology[]>([]);
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: "success" | "warning" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      showToast(`${tech.name} is already added to your stack!`, "warning");
      return;
    }

    setStack([...stack, tech]);
    showToast(`${tech.name} added to your stack`, "success");
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      showToast(`${itemToRemove.name} removed from your stack`, "warning");
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    showToast("All items removed from your stack", "warning");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      
      {/*Toast Notification Card */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-white border border-emerald-200 border-l-4 border-l-emerald-500 shadow-xl rounded-xl px-4 py-3 min-w-[280px] transition-all animate-fade-in">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold ${
              toast.type === "success" ? "bg-emerald-500" : "bg-amber-500"
            }`}
          >
            {toast.type === "success" ? "✓" : "!"}
          </div>
          <p className="text-sm font-medium text-slate-700 flex-1">
            {toast.message}
          </p>
          <button
            onClick={() => setToast(null)}
            className="text-slate-400 hover:text-slate-600 text-sm font-bold ml-2"
          >
            ✕
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side: Technology Cards */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold">
            Explore The <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technology</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {technologies.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Title & Rating */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {tech.name}
                      </h3>
                      <div className="flex items-center text-sm font-medium text-amber-500">
                        ★ <span className="ml-1 text-slate-700">{tech.rating}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {tech.description}
                    </p>

                    {/* Category & Difficulty */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                        {tech.category}
                      </span>
                      <span className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-md font-medium">
                        {tech.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
                      isAdded
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sticky top-6">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-800">Your Stack</h3>
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">
                {stack.length} Selected
              </span>
            </div>

            {stack.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <p className="text-3xl mb-2">🧰</p>
                <p className="text-sm font-medium text-slate-600">
                  Your stack is empty
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Click "Add to Stack" to select technologies.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-white border border-slate-200 p-3 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-xs text-slate-400">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(item.id)}
                      className="text-slate-400 hover:text-red-500 hover:bg-red-50 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all"
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                {/* 🔴 Remove All Button */}
                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-2 py-2 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-xl hover:bg-rose-100 transition-all"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;