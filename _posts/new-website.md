---
title: This is the new aidanthebandit.com
description: A completely new website!
coverImage: /posts/new-website/epiphany.png
date: "2023-01-20T21:27:13.118Z"
relation:
    project: aidanthebandit.com
pinned: true
author:
    name: AidanTheBandit
    picture: https://github.com/AidanTheBandit.png
---

I have been working on a new website for a while now, and it finally got to a point where I can say: It's here.  
It's built with Next.js and has a fully custom static-site blog system using Markdown with Rehype for content management.

**See its [project page](/project/aidanthebandit.com) for more information about the technology and the project.**

The new website is still partly under construction, but it is ready to go as far as I can see.  
I hope you enjoy it just as much as I enjoyed making it and enjoy maintaining it.  
If you have any questions, you can contact me either on Discord or via aidan@banditco.dev.

**The source code is available on [GitHub](https://github.com/AidanTheBandit/aidanthebandit.com).**

## The Demonstration

As for the rest of the post, I will be demonstrating some Markdown features.

**Bold text**. Italic text does not look good with this typeface, which does not have [real italics](https://www.marksimonson.com/notebook/view/FakevsTrueItalics). There's ~~strikethrough~~, though.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

| City       | Country    |
| ---------- | ---------- |
| Helsinki   | Finland    |
| Belgrade   | Serbia     |
| ??????     | ??????     |
| Oslo       | Norway     |
| Düsseldorf | Germany    |
| Baku       | Azerbaijan |
| Malmö      | Sweden     |
| Copenhagen | Denmark    |
| Vienna     | Austria    |
| Stockholm  | Sweden     |
| Kyiv       | Ukraine    |

<!-- The table above is a mystery table of various cities and countries. However, upon closer inspection, we can see that the order stands for the cities and countries that hosted the Eurovision Song Contest, starting in 2007 until 2017. I was surprised how many people didn't know that. -->

> A blockquote.

$$
\begin{align}
    \int_0^\infty x^2 dx &= \frac{d}{dx} \left( \int_0^\infty x^2 dx \right) \\
    &= \frac{d}{dx} \left( \int_0^\infty x^2 dx \right) \\
\end{align}
$$

Inline $\KaTeX$. A [link](https://github.com/aidanthebandit). Big link without custom display text: https://barkle.chat/@AidanTheBandit.

-   A list item
    -   Another list item
    -   Yet another list item

A small code block: `This is a code block.`

A big, highlighted code block, full of yummy Rust code:

```rust
fn main() {
    println!("Hello, world!");
}
```

::::note{title="Admonition"}
This admonition in markdown:

```md
:::note{title="Admonition"}
This admonition in markdown:
[...]
:::
```

You're not going to see any recursion today. I'm sorry.
::::

:::note{title="PSA" type="danger"}
Please do not delete your root directory. Bad things will happen if you do. Or so I'm told.  
:::

:::note{title="Warning" type="warning"}
I am warning you (of something)
:::

:::note{title="Info" type="info"}
the uh  
thing happened
:::

:::note{title="Success" type="success"}
and it happened well, apparently
:::

Emoji codes automatically become their corresponding emoji, for example, `:+1:` becomes :+1:. :smiling_face_with_3_hearts: is also supported. :yum:!
