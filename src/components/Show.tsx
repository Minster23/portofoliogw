import { For, type Component } from "solid-js";
import Info from "../konten/Info.json";

const Shows: Component = () => {
  return (
    <>
      <span class="text-rotate duration-5700 ">
        <span>
          <For each={Info.Skill} fallback={<span>....</span>}>
            {(item) => (
              <span class={item.bg + " font-bold rounded px-2 hover:underline"}>
                {item.skill}
              </span>
            )}
          </For>
        </span>
      </span>
    </>
  );
};

export default Shows;
