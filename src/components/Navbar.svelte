<script lang="ts">
  import { Bars3BottomRight, ChevronRight } from "svelte-heros-v2";

  export let sitename: string;

  let new_sitename: string = sitename ? sitename : "";

  const navLinks = [
    {
      label: "Home",
      href: "/",
      active: new_sitename === "",
    },
    {
      label: "My Skills",
      href: "/skills",
      active: new_sitename === "skills",
    },
    {
      label: "My Projects",
      href: "/projects",
      active: new_sitename === "projects",
    },
    {
      label: "About me",
      href: "/about-me",
      active: new_sitename === "about-me",
    },
  ];

  const dropdownNavLinks = [
    {
      parent: "API",
      active:
        new_sitename === "project-apis/destiny" ||
        new_sitename === "project-apis/nezumi",
      pages: [
        {
          label: "Destiny",
          href: "/project-apis/destiny",
          active: new_sitename === "project-apis/destiny",
        },
        {
          label: "Nezumi",
          href: "/project-apis/nezumi",
          active: new_sitename === "project-apis/nezumi",
        },
      ],
    },
  ];
</script>

<nav
  class="navbar border-b sticky top-0 left-0 border-accent bg-base-100 z-40 h-14"
>
  <div class="navbar-start">
    <div class="dropdown">
      <span tabindex="0" class="btn btn-ghost lg:hidden">
        <Bars3BottomRight />
      </span>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100"
      >
        {#each navLinks as navlink}
          <li>
            <a
              class="m2 bg-clip-text bg-gradient-to-r from-primary via-accent to-error"
              class:text-transparent={navlink.active}
              class:font-bold={navlink.active}
              href={navlink.href}
            >
              {navlink.label}
            </a>
          </li>
        {/each}
        <li>
          {#each dropdownNavLinks as navlink}
            <span>
              <div
                class="flex flex-row items-center text-center bg-clip-text bg-gradient-to-r from-primary via-accent to-error"
                class:text-transparent={navlink.active}
                class:font-bold={navlink.active}
              >
                {navlink.parent}<ChevronRight size="12" class="text-neutral" />
              </div>
            </span>
            <ul class="bg-base-100">
              {#each navlink.pages as item}
                <li>
                  <a
                    class="m2 bg-clip-text bg-gradient-to-r from-primary via-accent to-error"
                    class:text-transparent={item.active}
                    class:font-bold={item.active}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              {/each}
            </ul>
          {/each}
        </li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl" href="/">Luca Schmidt</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {#each navLinks as navlink}
        <li>
          <a
            class="m2 bg-clip-text bg-gradient-to-r from-primary via-accent to-error"
            class:text-transparent={navlink.active}
            class:font-bold={navlink.active}
            href={navlink.href}
          >
            {navlink.label}
          </a>
        </li>
      {/each}
      <li>
        {#each dropdownNavLinks as navlink}
          <div class="dropdown dropdown-right dropdown-hover z-50">
            <span>
              <div
                class="flex flex-row items-center text-center bg-clip-text bg-gradient-to-r from-primary via-accent to-error"
                class:text-transparent={navlink.active}
                class:font-bold={navlink.active}
              >
                {navlink.parent}<ChevronRight size="12" class="text-neutral" />
              </div>
            </span>
            <ul tabIndex={0} class="dropdown-content menu bg-base-100">
              {#each navlink.pages as item}
                <li>
                  <a
                    class="m2 bg-clip-text bg-gradient-to-r from-primary via-accent to-error"
                    class:text-transparent={item.active}
                    class:font-bold={item.active}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </li>
    </ul>
  </div>
</nav>
