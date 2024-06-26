export default () => {
  const dark = "dark";
  let html: HTMLHtmlElement | null;

  onMounted(() => {
    html = document.getElementsByTagName("html").item(0);
  });

  return () => {
    if (!html) return;

    html.classList.contains(dark)
      ? html.classList.remove(dark)
      : html.classList.add(dark);
  };
};
