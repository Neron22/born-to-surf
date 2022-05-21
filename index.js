window.addEventListener("load", loader);

function loader() {
  const TLLOAD = gsap.timeline();
  TLLOAD.to(".images-container", {
    height: 300,
    duration: 0.3,
    delay: 0.4,
    ease: "power2.out",
  });
  TLLOAD.to(".charge-line", {
    border: 2,
    width: 320,
    duration: 0.5,
    ease: "power2.out",
  });
  TLLOAD.to(
    ".txt-bienvenue",
    {
      background: "rgba(255, 255, 255, 0.98)",
      transform: "translateX(0px)",
      duration: 1.3,
      ease: "power2.out",
    },
    "-=1.6"
  );
  TLLOAD.to(
    ".txt-bienvenue h2",
    {
      visibility: "visible",
      transform: "translateX(-50%)",
      duration: 1.3,
      delay: 0.4,
      ease: "power2.out",
    },
    "-=1.2"
  );
  TLLOAD.to(".f2", {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
  TLLOAD.add(() => {
    document.querySelector(".img-surf").style.backgroundImage =
      "url('/assets/surf3.jpg')";
  });
  TLLOAD.to(".f2", {
    y: "-100%",
    duration: 0.5,
    ease: "power2.out",
  });
  TLLOAD.to(".f2", {
    y: 0,
    duration: 0.5,
    delay: 0.8,
    ease: "power2.out",
  });
  TLLOAD.add(() => {
    document.querySelector(".img-surf").style.backgroundImage =
      "url('/assets/surf2.jpg')";
  });
  TLLOAD.to(".f2", {
    y: "-100%",
    duration: 0.5,
    ease: "power2.out",
  });

  TLLOAD.to(".f2", {
    y: 0,
    duration: 0.5,
    delay: 0.8,
    ease: "power2.out",
  });
  TLLOAD.add(() => {
    document.querySelector(".img-surf").style.backgroundImage =
      "url('/assets/surf4.jpg')";
  });
  TLLOAD.to(".f2", {
    y: "-100%",
    duration: 0.5,
    ease: "power2.out",
  });
  TLLOAD.to(".f2", {
    y: 0,
    duration: 0.5,
    delay: 0.8,
    ease: "power2.out",
  });
  TLLOAD.add(() => {
    document.querySelector(".img-surf").style.backgroundImage =
      "url('/assets/surf5.jpg')";
  });
  TLLOAD.to(".f2", {
    y: "-100%",
    duration: 0.5,
    ease: "power2.out",
  });

  TLLOAD.to(".load-container", {
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
  });
  TLLOAD.add(() => {
    document.querySelector(".load-container").style.display = "none";
  });

  TLLOAD.add(() => {
    document.querySelector("video").play();
  }, "-=0.8");
}
