import { Component, For } from "solid-js";
import Info from "../konten/Info.json";

const CertShow: Component = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-4">
      <For each={Info.Cert}>
        {(i) => (
          <div class="card w-full max-w-60 flex flex-col">
            <div class="hover-3d relative">
              <figure class="w-full rounded-2xl z-0 overflow-hidden">
                <img
                  src={i.Image}
                  alt={i.Title}
                  class="w-full h-auto object-cover"
                />
              </figure>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* Teks sekarang di bawah kartu */}
            <div class="mt-3 text-center sm:text-left">
              <h3 class="font-semibold text-base text-gray-800 dark:text-gray-200">
                {i.Title} <span><a href={i.Link} target="_blank" class="link link-primary">Goto</a></span>
              </h3>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default CertShow;
