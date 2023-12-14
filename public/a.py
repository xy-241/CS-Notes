import os
from datetime import datetime

def add_divider_under_h2(path):
  """Adds "---" divider right under h2 headers in a markdown file."""
  original_mtime = os.path.getmtime(path)
  updated = False
  with open(path, 'r+') as f:
    content = f.read()
    lines = content.splitlines()

    for i, line in enumerate(lines):
      if line.startswith('## ') and (i + 1 >= len(lines) or lines[i + 1] != '---'):
        lines.insert(i + 1, '---')
        updated = True

    f.seek(0)
    f.truncate()
    f.write('\n'.join(lines))
  
  os.utime(path, (original_mtime, original_mtime))  # Keep the modification date the same
  if updated:
    print(path)
    return 1
  return 0

def walk_directory(directory):
  """Walks through the directory and nested directories, calling add_divider_under_h2 for each markdown file."""
  totalUpdated = 0
  for root, _, files in os.walk(directory):
    for filename in files:
      if filename.endswith('.md'):
        file_path = os.path.join(root, filename)
        totalUpdated +=  add_divider_under_h2(file_path)
  return totalUpdated

# Set the directory to process
directory = os.getcwd()

# Walk through the directory

print("Added dividers under h2 headers in " + str(walk_directory(directory)) +  " markdown files.")


