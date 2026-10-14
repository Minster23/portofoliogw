import { type Component } from "solid-js";
import Info from "../konten/Info.json";

const Tabs: Component = () => {
  return (
    <div class="tabs tabs-border justify-center">
      <input
        type="radio"
        name="my_tabs_2"
        class="tab"
        aria-label="Project"
        checked
      />
      <div class="tab-content border-base-300 bg-base-100 p-10">
        Tab content 1
      </div>

      <input type="radio" name="my_tabs_2" class="tab" aria-label="Certificate and Badge" />
      <div class="tab-content border-base-300 bg-base-100 p-10">
        Certificate and Badge
      </div>

    </div>
  );
};

export default Tabs;
