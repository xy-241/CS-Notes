import os
from datetime import datetime

def add_last_modified(path):
  lastModifiedTime = os.path.getmtime(path)

  updated = False
  pastLast = False

  with open(path, 'r+') as f:
    content = f.read()
    lines = content.splitlines()

    for i in range(len(lines)):
      if (lines[i].startswith('Creation Date:') and len(lines[i]) < 20):
        lines[i] = 'Creation Date: ' + datetime.fromtimestamp(lastModifiedTime).strftime("%Y-%m-%dT%H:%M:%S+08:00")
        print(path)
        updated = True
        # creation_time = datetime.strptime(lines[i][14:], "%Y-%m-%dT%H:%M:%S+08:00")
        
      if (lines[i].startswith('Last Date:') and len(lines[i]) < 20):
        lines[i] = 'Last Date: ' + datetime.fromtimestamp(lastModifiedTime).strftime("%Y-%m-%dT%H:%M:%S+08:00")
        print(path)
        updated = True
        pastLast = True

      if (pastLast):
        continue


      f.seek(0)
      f.truncate()
      f.write('\n'.join(lines))
  
  os.utime(path, (lastModifiedTime, lastModifiedTime))  # Keep the modification date the same
  if (updated):
    return 1


def walk_directory(directory):
  """Walks through the directory and nested directories, calling add_divider_under_h2 for each markdown file."""
  totalUpdated = 0
  for root, _, files in os.walk(directory):
    for filename in files:
      if filename.endswith('.md'):
        file_path = os.path.join(root, filename)
        totalUpdated +=  add_last_modified(file_path)
  return totalUpdated

# Set the directory to process
directory = os.getcwd()

# Walk through the directory

print("Added markdown metadata in " + str(walk_directory(directory)) +  " markdown files.")


