import { For, type Component } from "solid-js";
import Info from "../konten/Info.json";
import Shows from "./Show";

const Hero: Component = () => {
  return (
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <h1 class="text-5xl font-bold font-sans">
            <span class="hover:underline">Halo</span>
          </h1>
          <p class="py-6">
            <span>
              Saya {Info.Nama}
              {Info.Tentang} <Shows />
            </span>
          </p>
          <span>Social: </span>
          <div class="mb-2 mt-2 flex flex-wrap gap-2 justify-start items-center">
            <For each={Info.Social}>
              {(i) => (
                <div class="badge badge-md badge-outline">
                  <a href={i.Link} target="_blank">
                    {i.Title}
                  </a>
                </div>
              )}
            </For>
          </div>
          <span>Languages: </span>
          <div class="flex flex-wrap gap-2 justify-start items-center mt-2">
            <For each={Info.Lang}>
              {(i) => (
                <div class="badge badge-sm badge-outline">
                  {i}
                </div>
              )}
            </For>
          </div>

        </div>
        <iframe frameBorder="0" height="157px" width="88%" src="https://git-graph.vercel.app/embed/Minster23?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=0&blockSize=10&fontSize=14&weekStart=4&year=2026"></iframe>
      </div>
    </div>
  );
};

export default Hero;
