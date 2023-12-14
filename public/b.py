import os
from datetime import datetime

def add_md_meta(path):
  creation_time = os.path.getctime(path)
  original_mtime = os.path.getmtime(path)


  updated = False
  tagUpdated = False

  with open(path, 'r+') as f:
    content = f.read()
    lines = content.splitlines()

    if (len(lines) > 0 and lines[0] != '---'):
      # if (creation_time < original_mtime):
      #   print("FALSE!")
      #   print(f"creation_time: {creation_time} > original_mtime: {original_mtime}")
      #   print(path)
      #   print(f"creation_time: {os.path.getctime(path)}")
      #   print(f"original_mtime: {os.path.getmtime(path)}")
      #   print(f"creation_time: {datetime.fromtimestamp(creation_time).strftime('%Y-%m-%dT%H:%M:%S+08:00')}")
      #   print(f"original_mtime: {datetime.fromtimestamp(original_mtime).strftime('%Y-%m-%dT%H:%M:%S+08:00')}")
      #   raise Exception("An error occurred.")
      tagList = []
      if lines[0].startswith('#'):
        tagUpdated = True
        tagList = lines[0].split(' ')

      metaData = []
      metaData.append("---")
      metaData.append("Author:")
      metaData.append("  - Xinyang YU")
      metaData.append("Author Profile:")
      metaData.append("  - https://linkedin.com/in/xinyang-yu")
      metaData.append("tags:")
      for tag in tagList:
        if (tag.startswith('#')):
          metaData.append("  - " + tag[1:])

      if (creation_time > original_mtime):
        metaData.append("Creation Date: " + datetime.fromtimestamp(original_mtime).strftime("%Y-%m-%dT%H:%M:%S+08:00"))
        print("false")
      else:
        metaData.append("Creation Date: " + datetime.fromtimestamp(creation_time).strftime("%Y-%m-%dT%H:%M:%S+08:00"))
        print("true")
      
      metaData.append("Last Date: " + datetime.fromtimestamp(original_mtime).strftime("%Y-%m-%dT%H:%M:%S+08:00"))

        
      metaData.append("References:")
      metaData.append("---")
      lines = metaData + lines[1:]

      f.seek(0)
      f.truncate()
      f.write('\n'.join(lines))
      updated = True
  
  os.utime(path, (original_mtime, original_mtime))  # Keep the modification date the same

  if updated:
    print("🗒️: {}, 🏷️: {}".format(path, tagUpdated))
    return 1
  return 0

def walk_directory(directory):
  """Walks through the directory and nested directories, calling add_divider_under_h2 for each markdown file."""
  totalUpdated = 0
  for root, _, files in os.walk(directory):
    for filename in files:
      if filename.endswith('.md'):
        file_path = os.path.join(root, filename)
        totalUpdated +=  add_md_meta(file_path)
  return totalUpdated

# Set the directory to process
directory = os.getcwd()

# Walk through the directory

print("Added markdown metadata in " + str(walk_directory(directory)) +  " markdown files.")


