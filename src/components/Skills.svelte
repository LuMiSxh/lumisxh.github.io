<script lang="ts">
  let skills = [
    {
      name: "Rust",
      desc: "I just love it. It's blazingly fast and I really like to write code with it.",
      img: "https://www.nicepng.com/png/full/34-348422_community-spotlight-rust-programming-language.png",
    },
    {
      name: "Python",
      desc: "The first language I learned. Nowadays I rarely use it for complete projects, but I use it to test / plan new project ideas.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Typescript",
      desc: "I really like it. It's heck a lot better than javascript with its typechecking and I use it for almost all web projects I'm working on.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "C#",
      desc: "The second language I learned. Relativeley easy to code wiht - I just hate using Visual Studio for it. I used it for Windows-UI applications and some Unity.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Kotlin",
      desc: "Really solid language and it deserves it's title as the successor of java. I use it mostly for android app development.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "Elixir",
      desc: "Wonderfull language but sadly I only learned it and never used it. Maybe some day...",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
    },
  ];
</script>

<div
  class="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 md:gap-x-3 md:gap-y-8 w-full"
>
  {#each skills as skill}
    <div class="flex flex-col w-full justify-center items-center">
      <div
        class="card card-compact w-96 backdrop-blur-md rounded-xl shadow-2xl p-2 shadow-black"
      >
        <figure class="flex justify-center">
          <img src={skill.img} alt={skill.name} class="w-28 h-28" />
        </figure>
        <div class="card-body justify-center text-center">
          <h2 class="card-title">{skill.name}</h2>
          <p>{skill.desc}</p>
          <div class="card-actions">
            <a
              class="btn bg-gradient-to-r from-lumisxh-primary via-lumisxh-accent to-lumisxh-error border-none text-bold text-lumisxh-neutral hover:opacity-75"
              href={"projects#" + skill.name}>Show Projects</a
            >
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
