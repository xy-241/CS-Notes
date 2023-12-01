#OS 
## Abstract
- Allow data to flow between two [[Process]] in a *uni-directional* manner. One process writes to the pipe, and the other reads from it
- Sort of [[Pseudo-file]] that can be used to connect 2 [[Process]]
- Direct one [[Process]]'s output to another's input

## Pipe in [[Unix]] & [[OS/MISC/UNIX vs Linux/Linux]]
### 3 default common channels
1. ``stdin``: [[File Descriptor]] is `0`
2. ``stdout``: [[File Descriptor]] is `1`
3. ``stderr``: [[File Descriptor]] is `2`
### C codes

