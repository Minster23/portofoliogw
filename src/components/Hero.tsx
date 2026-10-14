import { For, type Component } from "solid-js";
import Info from "../konten/Info.json";
import Shows from "./Show";

const Hero: Component = () => {
  return (
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <h1 class="text-5xl font-bold">Halo</h1>
          <p class="py-6">
            <span>Saya {Info.Nama}{Info.Tentang} <Shows/></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
