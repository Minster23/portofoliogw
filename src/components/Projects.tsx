import { Component, For } from "solid-js";
import Info from "../konten/Info.json";

const ProjectShow: Component = () => {
  return (
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <For each={Info.Project}>
        {(item) => (
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-end timeline-box">
              <span class="font-bold">{item.Title}</span>
              <br />
              <span class="text-blue-300">
                <a href={item.Link} target="_blank">
                  {item.Link}
                </a>
              </span>
              <br />
              <span class="font-bold">{item.Tentag}</span>
            </div>
            <hr />
          </li>
        )}
      </For>
    </ul>
  );
};

export default ProjectShow;
