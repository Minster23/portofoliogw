import { For, type Component } from "solid-js";
import Info from "../konten/Info.json";
import * as Icons from 'solid-icons/ai'
import { Dynamic } from 'solid-js/web';

const Shows: Component = () => {
  return (
    <>
      <span class="text-rotate duration-10000 ">
        <span>
          <For each={Info.Skill} fallback={<span>....</span>}>
            {(item) => (
              <span
                style={{ "background-color": item.bg }}
                class={`inline-flex items-center gap-2 font-bold rounded px-2 text-white hover:underline`}>
                <Dynamic component={Icons[item.icon]} class={'h-4'} />
                {item.skill}
              </span>
            )}
          </For>
        </span>
      </span>
      <div>
      </div>
    </>
  );
};

export default Shows;
