import { Component, For } from "solid-js";
import Info from "../konten/Info.json";

const ProjectShow: Component = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-4">
      <For each={Info.Project}>
        {(item) => (
          <div>
            <div class="card bg-primary text-primary-content w-full max-w-60 flex flex-col">
  <div class="card-body">
    <h2 class="card-title">{item.Title}</h2>
    <p>{item.Tentang}</p>
    <div class="card-actions justify-end">
      <button class="btn">
        <a href={item.Link} target="_blank">
          Lihat
        </a></button>
    </div>
  </div>
  </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default ProjectShow;
