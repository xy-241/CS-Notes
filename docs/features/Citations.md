---
title: Citations
tags:
  - feature/transformer
---

Quartz uses [rehype-citation](https://github.com/timlrx/rehype-citation) to support parsing of a BibTex bibliography file.

Under the default configuration, a citation key `[@templeton2024scaling]` will be exported as `(Templeton et al., 2024)`.

> [!example]- BibTex file
>
> ```bib title="bibliography.bib"
> @article{templeton2024scaling,
>   title={Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet},
>   author={Templeton, Adly and Conerly, Tom and Marcus, Jonathan and Lindsey, Jack and Bricken, Trenton and Chen, Brian and Pearce, Adam and Citro, Craig and Ameisen, Emmanuel and Jones, Andy and Cunningham, Hoagy and Turner, Nicholas L and McDougall, Callum and MacDiarmid, Monte and Freeman, C. Daniel and Sumers, Theodore R. and Rees, Edward and Batson, Joshua and Jermyn, Adam and Carter, Shan and Olah, Chris and Henighan, Tom},
>   year={2024},
>   journal={Transformer Circuits Thread},
>   url={https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html}
> }
> ```

> [!note] Behaviour of references
>
> By default, the references will be included at the end of the file. To control where the references to be included, uses `[^ref]`
>
> Refer to `rehype-citation` docs for more information.

## Customization

Citation parsing is a functionality of the [[plugins/Citations|Citation]] plugin. **This plugin is not enabled by default**. See the plugin page for customization options.
