# How to create a new icon

To create a new icon I recommend to download a svg icon and copy the svg code to an a component, for this way avoid junks files, css or assets

/-fill (for fill icons)
/-outline (for outline icons)

**or you can create your custom folder**

On the composables folder exist a useSVG composable, where you can setup some styles to edit the svg, and pass the configuration as a v-bind (:="SVGProps")

[Icons](https://akveo.github.io/eva-icons/#/)