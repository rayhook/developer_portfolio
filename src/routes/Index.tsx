import { useState } from "react";

function Index() {
  const PROJECTS = [
    {
      project_name: "Messenger App",
      project_description:
        "A fullstack messenger app. Allows real-time chat and ability to send mutiple photos between users",
      project_technologies: "React, Express, Postgres, Redux",
      deplyed_url: "https://github.com/rayhook/messenger-6877",
    },
    {
      project_name: "Instaframe",
      project_description:
        "A clone of instagram. Features includes uploading photos,posting comments and liking",
      project_technologies: "React, Express, MongoDB",
      deplyed_url: "https://rayhook-insta-clone.netlify.app/",
    },
    {
      project_name: "Recipe Builder",
      project_description:
        'A light and fast recipes builder app. Create recipes, find recipes by name or other filters or add recipes to your "favorite" or "want to try list"',
      project_technologies: "React, Express",
      deplyed_url: "https://rayhook-recipe-builder.netlify.app/",
    },
  ];
  const [projects] = useState(PROJECTS);

  return (
    <div className="px-4 bg-indigo-900">
      <div className="container flex gap-2 py-4">
        <div className="mx-auto max-w-2xl w-full">
          <h2 className="text-7xl text-white uppercase">Chris Movassagh</h2>
        </div>
        <div className="mx-auto max-w-2xl w-full">
          <h4 className="text-2xl text-neutral-500">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio. My main focus these days
            is building accessible user interfaces for our customers at Klaviyo.
            I most enjoy building soft
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Index;
