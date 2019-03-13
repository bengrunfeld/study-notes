const url = https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=71e4f5f480944bf6a44afcaa48dc188c

const changeData = (url) => {
    
    const data = jQuery.get(url)
    
    // changes to data structure
    
    return Object.assign({}, data)
}

const newData = changeData(url)

let data = {a:1, b:2, c:{a:1, b: {b1: 4}}}

let target = {}

for (var key in data) {
    //if (data.hasOwnProperty(key)) {
        const val = data[key]
        target[key] = val
    //
}

copiedData = Object.assign


-------------------------
/**

title: ""I GIVE YOU MY BODY ..."",
description: "The author of the Outlander novels gives tips on writing sex scenes, drawing on examples from the books.",
contributor: "by Diana Gabaldon",
author: "Diana Gabaldon",
contributor_note: "",
price: 0,
age_group: "",
publisher: "Dell",
isbns: [
{
isbn10: "0399178570",
isbn13: "9780399178573"
}
],
ranks_history: [
{
primary_isbn10: "0399178570",
primary_isbn13: "9780399178573",
rank: 8,
list_name: "Advice How-To and Miscellaneous",
display_name: "Advice, How-To & Miscellaneous",
published_date: "2016-09-04",
bestsellers_date: "2016-08-20",
weeks_on_list: 1,
ranks_last_week: null,
asterisk: 0,
dagger: 0
}
],
reviews: [
{
book_review_link: "",
first_chapter_link: "",
sunday_review_link: "",
article_chapter_link: ""
}
]
},
**/


[Search Field]
Title | Description | Publisher | Rank | Author | Published Date


1. Display data as per above format in a listview
2. Input field should filter out the results on as per the input on the search field
3. Click handler that can sort the data if the user clicks on the header
4. Description should be truncated by the words with the max length to be 50 char


