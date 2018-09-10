# Performance 

## Main Determining Factors

* Visitors connection speed - which we have no control over
* Bandwidth and power of the web server - which we can control by choosing the right hosting provider
* How well our site is optimized for performance 

## Consequences of Bad Performance

* UX
* User and Owner cost - it costs money to push data through the web, so if your site suffers from bloat (images, etc), then this can cost both you and the visitor (mobile connection) money
* Findability (SEO - sites ranked by mobile performance)

## Basic Optimizations

### HTML 

* Follow web standards
* Use native browser behaviors (button, select, etc)
* Minify and compress files

### CSS and JS

* Write DRY code (don't repeat yourself)
* Load critical CSS/JS **first** to display content above the fold

#### Concatenating Files

Under HTTP/2, **it is NO LONGER best practice** to concatenate CSS/JS files

### Images

Images are the biggest cause of site bloat, and provide the greatest opportunity for optimization. 

* Pick appropriate format
* Optimize through Photoshop/Gimp
* Optimize and compress for Web
* Use responsive image markup for optimized delivery
* Always ask: "Will this image help visitors and improve UX?" (usually the answer is No)

### Server Transfer of Data

* Compress files
* Critical loading sequence
* Caching
* Content Delivery Networks (CDN's)

### Browser

* To improve perceived performance, when assets reach the browser, serve them with a Top-Down approach. Focus on above-the-fold critical rendering
* Utilize server push for optimal caching
* 
