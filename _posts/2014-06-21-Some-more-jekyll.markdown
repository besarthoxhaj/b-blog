---
layout: post
title:  "Liquid template in Jekyll"
date:   2014-06-22 13:17:36
categories: tutorials
author: Besart
---

Hi guys! Today I want to show you some jekyll! Basically I wanted that my `posts page` (all of them, possibly automatically) looked like the right one, from the forbes.com website.

<div class="row">
    <div class="col-xs-6"><img src="http://oi59.tinypic.com/10fyvwj.jpg" class="img-thumbnail" style="margin:10px 10px 30px 10px;"/></div>
    <div class="col-xs-6"><img src="http://i61.tinypic.com/2d91mbs.jpg" class="img-thumbnail" style="margin:10px 10px 30px 10px;"/></div>
</div>

  
To make this happened I used Jekeyll. Jekyll uses a liquid template engine, which basically helps you not writing the same code again and again.

From here on I take from grant that you are a bit familiar with liquid template engine, if this is not the case, I recommend to have a look at this <a href="#">short guide.</a>

There are two types of markup in liquid:

  <ul>
  <li><strong>Logic tags</strong>:  These are conditional liquid statements. They are the statement that tells the code what to do.</li>
  <li><strong>Output tags</strong>: these tags display the liquid found between it. You can also use filters to change the output returned</li>
  </ul>

First I created 4 nominative file in `_include` directory. I called them `besart.html`, `barry.html`, `izaak.html` and `brian.html`.

<div class="col-xs-12">
<center>
  <img src="http://i60.tinypic.com/2jdgzh4.jpg" class="img-thumbnail" style="width:70%;margin:10px 10px 30px 10px;"/>
  </center>
</div>

Than implement the following code in post.html

{% highlight ruby %}

  (% if page.author == "Besart" %}
   (% include besart.html %}
  (% endif %}

  (% if page.author == "Barry" %}
   (% include barry.html %}
  (% endif %}

{% endhighlight %}

<div class="col-xs-12">
<center>
  <img src="http://i60.tinypic.com/23ma1ah.jpg" class="img-thumbnail" style="width:70%;margin:10px 10px 30px 10px;"/>
  </center>
</div>

At this point however I had to create a meta data called 'author: authorName'. Which will be inherited first in post then in page.

<div class="col-xs-12">
<center>
  <img src="http://i58.tinypic.com/atsy1f.jpg" class="img-thumbnail" style="width:70%;margin:10px 10px 30px 10px;"/>
  </center>
</div>