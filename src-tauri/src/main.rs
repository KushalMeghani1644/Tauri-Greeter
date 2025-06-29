// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::command;

#[command]
fn greet(name: &str) -> Result<String, String> {
    if name.trim().is_empty() {
        Err(String::from("Name cannot be empty!"))
    } else {
        Ok(format!("Hello! {}", name))
    }
}

fn main() {
    //vibes_tauri_lib::run();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("Error while running");
}
