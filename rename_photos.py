import os
import sys

def rename_photos(folder_path="Favourites"):
    """
    Rename all image files in the specified folder to photo1, photo2, etc.
    Supports jpg, jpeg, png, and webp extensions.
    """
    
    # Check if folder exists
    if not os.path.exists(folder_path):
        print(f"Error: Folder '{folder_path}' does not exist.")
        return
    
    # Supported image extensions
    supported_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    
    # Get all image files from the folder
    image_files = []
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            _, ext = os.path.splitext(filename.lower())
            if ext in supported_extensions:
                image_files.append((filename, ext))
    
    # Sort files for consistent ordering
    image_files.sort()
    
    if not image_files:
        print(f"No image files found in '{folder_path}' folder.")
        return
    
    print(f"Found {len(image_files)} image files to rename:")
    
    # Show preview of what will be renamed
    for i, (old_name, ext) in enumerate(image_files, 1):
        new_name = f"photo{i}{ext}"
        print(f"  {old_name} -> {new_name}")
    
    # Ask for confirmation
    response = input("\nProceed with renaming? (y/n): ").lower().strip()
    if response != 'y' and response != 'yes':
        print("Operation cancelled.")
        return
    
    # Perform the renaming
    success_count = 0
    for i, (old_name, ext) in enumerate(image_files, 1):
        old_path = os.path.join(folder_path, old_name)
        new_name = f"photo{i}{ext}"
        new_path = os.path.join(folder_path, new_name)
        
        try:
            # Check if target filename already exists
            if os.path.exists(new_path) and old_path != new_path:
                print(f"Warning: '{new_name}' already exists, skipping '{old_name}'")
                continue
                
            os.rename(old_path, new_path)
            success_count += 1
            print(f"Renamed: {old_name} -> {new_name}")
            
        except OSError as e:
            print(f"Error renaming '{old_name}': {e}")
    
    print(f"\nCompleted! Successfully renamed {success_count} out of {len(image_files)} files.")

def main():
    """Main function to handle command line arguments"""
    if len(sys.argv) > 1:
        folder_path = sys.argv[1]
    else:
        folder_path = "Favourites"
    
    print(f"Renaming photos in folder: {folder_path}")
    rename_photos(folder_path)

if __name__ == "__main__":
    main()