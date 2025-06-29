import { invoke } from "@tauri-apps/api/core";
const input = document.querySelector<HTMLInputElement>("#name")!;
const button = document.querySelector<HTMLButtonElement>("#greet")!;
const response = document.querySelector<HTMLParagraphElement>("#response")!;

button.addEventListener("click", async () => {
  const name = input.value.trim();
  if (!name) {
    response.textContent = "Name cannot be empty!";
    return;
  }
  try {
    const message = await invoke<string>("greet", { name });
    response.textContent = message;
  } catch (error) {
    console.error("Tauri backend error: ", error);
    response.textContent = "Something went wrong!";
  }
});
