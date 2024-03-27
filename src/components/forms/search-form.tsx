'use client'
export default function SearchForm() {
    return (
        <form>
             <div
            className="absolute inset-y-0 right-10 flex items-center pl-1 pointer-events-none cursor-pointer z-50"
            // onClick={handleSubmitSearch}
          >
            <svg
              className="w-5 h-5 text-main "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className={`block w-full p-4 z-1  text-sm text-gray-900 border border-base 
            focus:ring-base focus:border-base focus:outline-none 
          rounded-xl`}
            placeholder="Bạn đang tìm gì?"
            // placeholder={t("WhatAreYouLookingFor")}
            name="q"
            autoComplete="off"
            // onFocus={() => setShowSearch(true)}
            // onClick={() => setShowSearch(true)}
            // value={textSearch}
            // onChange={(e) => setTextSearch(e.target.value)}
          />
        </form>
    );
    }