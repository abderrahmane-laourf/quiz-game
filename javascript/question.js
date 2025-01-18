export const questions = [
    {
        category: "javascript",
        question: [
            {
                question: "What is the output of the following code? console.log(1 + '2' + '2');",
                options: ["122", "32", "14", "NaN"],
                answerIndex: 0
            },
            {
                question: "What is the output of the following code? console.log(1 + '2' + '2');",
                options: ["122", "32", "14", "NaN"],
                answerIndex: 0
            },
            {
                question: "What is the output of the following code? console.log(1 + 2 + '3');",
                options: ["33", "123", "6", "15"],
                answerIndex: 0
            },
            {
                question: "What is the output of the following code? console.log(1 + '2' + 2);",
                options: ["122", "32", "14", "NaN"],
                answerIndex: 0
            },
            {
                question: "What is the output of the following code? console.log('A' - 'B' + '2');",
                options: ["-1", "NaN", "1", "12"],
                answerIndex: 1
            },
            {
                question: "What is the output of the following code? console.log('A' - 'B' + 2);",
                options: ["-1", "NaN", "1", "12"],
                answerIndex: 1
            },
            {
                question: "Which company developed JavaScript?",
                options: ["Microsoft", "Sun Microsystems", "Netscape", "IBM"],
                answerIndex: 2
            },
            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                options: ["//", "/*", "#", "--"],
                answerIndex: 0
            },
            // ... (rest of the JavaScript questions)
        ],
    },
    {
        category: "html",
        question: [
            {
                question: "Which of the following is used to create a hyperlink in HTML?",
                options: ["<a>", "<link>", "<href>", "<anchor>"],
                answerIndex: 0
            },
            {
                question: "How do you add a background color in HTML?",
                options: [
                    "<body style='background-color:blue;'>",
                    "<body background='blue'>",
                    "<background>blue</background>",
                    "<color background='blue'>"
                ],
                answerIndex: 0
            },
            {
                question: "Which HTML element is used to define an unordered list?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                answerIndex: 1
            },
            {
                question: "What is the purpose of the <title> element in HTML?",
                options: [
                    "To define the main heading",
                    "To specify the title of the web page shown in the browser tab",
                    "To add a title to an image",
                    "To define a section of the document"
                ],
                answerIndex: 1
            },
            {
                question: "Which tag is used to insert an image in HTML?",
                options: ["<img>", "<picture>", "<image>", "<src>"],
                answerIndex: 0
            },
            {
                question: "What is the correct syntax for creating a table in HTML?",
                options: [
                    "<table><tr><td></td></tr></table>",
                    "<table><row><col></col></row></table>",
                    "<table><thead><body></body></thead></table>",
                    "<table><div><span></span></div></table>"
                ],
                answerIndex: 0
            },
            {
                question: "How do you create a text input field in HTML?",
                options: ["<input type='text'>", "<input type='textbox'>", "<input text>", "<textbox>"],
                answerIndex: 0
            },
            {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["<lb>", "<break>", "<br>", "<newline>"],
                answerIndex: 2
            },
            {
                question: "Which element is used to create a numbered list in HTML?",
                options: ["<ol>", "<ul>", "<li>", "<numberedlist>"],
                answerIndex: 0
            },
            {
                question: "What is the correct HTML element for emphasizing text?",
                options: ["<em>", "<i>", "<strong>", "<italic>"],
                answerIndex: 0
            },
            {
                question: "Which HTML attribute is used to define inline styles?",
                options: ["class", "style", "css", "styles"],
                answerIndex: 1
            },
            {
                question: "Which HTML element is used to specify a footer for a document or section?",
                options: ["<footer>", "<bottom>", "<section-footer>", "<foot>"],
                answerIndex: 0
            },
            {
                question: "What does the <iframe> element do?",
                options: [
                    "Embeds another document within the current HTML document",
                    "Creates a form",
                    "Creates an image frame",
                    "Adds a scrolling effect"
                ],
                answerIndex: 0
            },
            {
                question: "How do you make a checkbox in HTML?",
                options: [
                    "<checkbox>",
                    "<input type='checkbox'>",
                    "<input type='box'>",
                    "<input checkbox>"
                ],
                answerIndex: 1
            },
            {
                question: "Which attribute specifies the URL of a linked resource in HTML?",
                options: ["src", "href", "link", "url"],
                answerIndex: 1
            },
            {
                question: "What is the purpose of the <meta> tag in HTML?",
                options: [
                    "To define metadata about an HTML document",
                    "To link external stylesheets",
                    "To add images to the document",
                    "To create navigation links"
                ],
                answerIndex: 0
            },
            {
                question: "What is the correct HTML for making a drop-down list?",
                options: ["<select>", "<input type='dropdown'>", "<list>", "<dropdown>"],
                answerIndex: 0
            },
            {
                question: "Which element is used to define the structure of an HTML table?",
                options: ["<table>", "<tr>", "<td>", "<th>"],
                answerIndex: 0
            },
            {
                question: "How can you create an email link in HTML?",
                options: [
                    "<a href='mailto:xxx@yyy.com'>",
                    "<mail href='xxx@yyy.com'>",
                    "<a email='xxx@yyy.com'>",
                    "<email>xxx@yyy.com</email>"
                ],
                answerIndex: 0
            },
            {
                question: "Which tag is used to define a paragraph in HTML?",
                options: ["<p>", "<para>", "<paragraph>", "<text>"],
                answerIndex: 0
            },
            {
                question: "What is the purpose of the <head> element in HTML?",
                options: [
                    "Contains metadata about the HTML document",
                    "Defines the main content of the document",
                    "Creates a header for a section",
                    "Specifies a header for the entire page"
                ],
                answerIndex: 0
            },
            {
                question: "Which attribute is used to provide extra information about an element and is often shown as a tooltip?",
                options: ["title", "info", "tooltip", "description"],
                answerIndex: 0
            },
            {
                question: "What is the function of the <nav> element in HTML?",
                options: [
                    "Defines a set of navigation links",
                    "Creates a new paragraph",
                    "Adds a video to the page",
                    "Specifies a section for news"
                ],
                answerIndex: 0
            },
            {
                question: "How do you group a set of radio buttons in HTML?",
                options: [
                    "By giving them the same name",
                    "By using the <group> tag",
                    "By giving them the same class",
                    "By using the <radio-group> tag"
                ],
                answerIndex: 0
            },
            {
                question: "How do you group a set of radio buttons in HTML?",
                options: [
                    "By giving them the same name",
                    "By using the <group> tag",
                    "By giving them the same class",
                    "By using the <radio-group> tag"
                ],
                answerIndex: 0
            },
        ]
    },
    {
        category: "css",
        question: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                answerIndex: 2
            },
            {
                question: "Which property is used to change the background color of an element?",
                options: [
                    "color",
                    "bgcolor",
                    "background-color",
                    "background"
                ],
                answerIndex: 2
            },
            {
                question: "Which property is used to change the font size of text in CSS?",
                options: [
                    "font-style",
                    "font-size",
                    "text-size",
                    "font-weight"
                ],
                answerIndex: 1
            },
            {
                question: "How do you select an element with the class 'button' in CSS?",
                options: [
                    ".button",
                    "#button",
                    "button",
                    "class.button"
                ],
                answerIndex: 0
            },
            {
                question: "Which CSS property is used to change the text color?",
                options: [
                    "color",
                    "text-color",
                    "font-color",
                    "text-style"
                ],
                answerIndex: 0
            },
            {
                question: "How do you make text bold in CSS?",
                options: [
                    "font-weight: bold",
                    "font-style: bold",
                    "text-weight: bold",
                    "text-decoration: bold"
                ],
                answerIndex: 0
            },
            {
                question: "Which CSS property is used to create space between the border and the content?",
                options: [
                    "padding",
                    "margin",
                    "border-spacing",
                    "spacing"
                ],
                answerIndex: 0
            },
            {
                question: "Which property is used to set the width of an element?",
                options: [
                    "height",
                    "width",
                    "size",
                    "dimensions"
                ],
                answerIndex: 1
            },
            {
                question: "What does the 'float' property do in CSS?",
                options: [
                    "Positions an element to the left or right of its container",
                    "Changes the size of an element",
                    "Sets the background color of an element",
                    "Aligns text inside an element"
                ],
                answerIndex: 0
            },
            {
                question: "What is the default value of the 'position' property in CSS?",
                options: [
                    "relative",
                    "absolute",
                    "fixed",
                    "static"
                ],
                answerIndex: 3
            },
            {
                question: "Which CSS property is used to control the visibility of an element?",
                options: [
                    "display",
                    "visibility",
                    "opacity",
                    "visibility-style"
                ],
                answerIndex: 1
            },
            {
                question: "What does the 'z-index' property do in CSS?",
                options: [
                    "Controls the stacking order of elements",
                    "Sets the size of an element",
                    "Defines the opacity of an element",
                    "Changes the position of an element"
                ],
                answerIndex: 0
            },
            {
                question: "Which CSS property is used to add a shadow effect to text?",
                options: [
                    "box-shadow",
                    "text-shadow",
                    "shadow-effect",
                    "text-effect"
                ],
                answerIndex: 1
            },
            {
                question: "How do you make an element centered horizontally in CSS?",
                options: [
                    "margin: auto",
                    "text-align: center",
                    "align-items: center",
                    "display: center"
                ],
                answerIndex: 0
            },
            {
                question: "Which property is used to change the font family of text?",
                options: [
                    "font-family",
                    "font-style",
                    "text-font",
                    "font"
                ],
                answerIndex: 0
            },
            {
                question: "How do you select all paragraph elements in CSS?",
                options: [
                    "p",
                    ".p",
                    "#p",
                    "*p"
                ],
                answerIndex: 0
            },
            {
                question: "What is the purpose of the 'clear' property in CSS?",
                options: [
                    "Specifies which sides of an element where other floating elements are not allowed",
                    "Clears the background color of an element",
                    "Removes the element from the document flow",
                    "Makes an element transparent"
                ],
                answerIndex: 0
            },
            {
                question: "Which property is used to create rounded corners in CSS?",
                options: [
                    "border-radius",
                    "corner-style",
                    "border-corner",
                    "element-round"
                ],
                answerIndex: 0
            },
            {
                question: "What does the 'margin: 0 auto' do?",
                options: [
                    "Centers an element horizontally",
                    "Sets the margin to zero on all sides",
                    "Aligns the element to the top",
                    "Makes the element invisible"
                ],
                answerIndex: 0
            },
            {
                question: "How do you add a border to an element in CSS?",
                options: [
                    "border-style",
                    "border",
                    "element-border",
                    "add-border"
                ],
                answerIndex: 1
            },
            {
                question: "Which property is used to change the list style type in CSS?",
                options: [
                    "list-style-type",
                    "list-type",
                    "style-list",
                    "bullet-style"
                ],
                answerIndex: 0
            },
            {
                question: "What is the function of the 'overflow' property in CSS?",
                options: [
                    "Controls what happens to content that overflows its area",
                    "Sets the border of an element",
                    "Adds a shadow to an element",
                    "Changes the opacity of an element"
                ],
                answerIndex: 0
            },
            {
                question: "How do you make a text italic in CSS?",
                options: [
                    "font-style: italic",
                    "text-style: italic",
                    "font: italic",
                    "text-decoration: italic"
                ],
                answerIndex: 0
            },
            {
                question: "Which property is used to set the spacing between lines of text?",
                options: [
                    "line-height",
                    "text-spacing",
                    "letter-spacing",
                    "line-spacing"
                ],
                answerIndex: 0
            },
            {
                question: "What is the purpose of the 'display: none' declaration?",
                options: [
                    "Hides an element",
                    "Makes an element transparent",
                    "Removes an element from the layout",
                    "Displays an element as a block"
                ],
                answerIndex: 0
            }
        ]
    },
    {
        category: "python",
        question: [
            {
                question: "What is the output of `print(type(1/2))` in Python 3?",
                options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
                answerIndex: 1
            },
            {
                question: "Which of the following is used to define a block of code in Python?",
                options: ["Indentation", "Brackets", "Parentheses", "Quotation marks"],
                answerIndex: 0
            },
            {
                question: "What is the correct way to create a function in Python?",
                options: ["function myFunction():", "def myFunction():", "create myFunction():", "new myFunction():"],
                answerIndex: 1
            },
            {
                question: "How do you insert a comment in Python code?",
                options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "-- This is a comment"],
                answerIndex: 1
            },
            {
                question: "Which data type is used to store a sequence of characters in Python?",
                options: ["str", "char", "string", "text"],
                answerIndex: 0
            },
            {
                question: "What is the output of `print(len([1, 2, 3, 4]))`?",
                options: ["3", "4", "5", "Error"],
                answerIndex: 1
            },
            {
                question: "How do you convert a string to an integer in Python?",
                options: ["int(str)", "str(int)", "to_int(str)", "convert(str, int)"],
                answerIndex: 0
            },
            {
                question: "Which operator is used to check if two values are equal in Python?",
                options: ["==", "=", "===", "!="],
                answerIndex: 0
            },
            {
                question: "What is the result of `print(3 * 'abc')`?",
                options: ["abcabcabc", "abc*3", "9", "Error"],
                answerIndex: 0
            },
            {
                question: "How do you define a list in Python?",
                options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
                answerIndex: 1
            },
            {
                question: "What does the `range()` function do?",
                options: ["Generates a sequence of numbers", "Returns a random number", "Calculates the range of a list", "Defines a function's scope"],
                answerIndex: 0
            },
            {
                question: "Which keyword is used to define a loop in Python?",
                options: ["loop", "for", "iterate", "repeat"],
                answerIndex: 1
            },
            {
                question: "How do you exit a loop in Python?",
                options: ["exit", "stop", "break", "return"],
                answerIndex: 2
            },
            {
                question: "What is the purpose of the `if` statement in Python?",
                options: ["To define a function", "To create a loop", "To make a decision", "To import a module"],
                answerIndex: 2
            },
            {
                question: "What is the correct syntax for an `elif` statement?",
                options: ["else if:", "elseif:", "elif:", "if else:"],
                answerIndex: 2
            },
            {
                question: "How do you define a dictionary in Python?",
                options: ["{key: value}", "(key: value)", "[key: value]", "<key: value>"],
                answerIndex: 0
            },
            {
                question: "Which method is used to add an element to the end of a list?",
                options: ["add()", "append()", "insert()", "push()"],
                answerIndex: 1
            },
            {
                question: "How do you remove an element from a list in Python?",
                options: ["delete()", "remove()", "erase()", "discard()"],
                answerIndex: 1
            },
            {
                question: "What is the purpose of the `try` and `except` blocks?",
                options: ["To define a function", "To create a loop", "To handle exceptions", "To import a module"],
                answerIndex: 2
            },
            {
                question: "Which module is used for mathematical operations in Python?",
                options: ["math", "calc", "numbers", "stats"],
                answerIndex: 0
            },
            {
                question: "How do you open a file in Python for reading?",
                options: ["open('file.txt', 'r')", "read('file.txt')", "file('file.txt', 'read')", "open('file.txt', 'read')"],
                answerIndex: 0
            },
            {
                question: "What does the `__name__` variable contain?",
                options: ["The name of the current module", "The name of the main function", "The name of the operating system", "The name of the Python interpreter"],
                answerIndex: 0
            },
            {
                question: "How do you create a class in Python?",
                options: ["class MyClass:", "object MyClass:", "new MyClass:", "def MyClass():"],
                answerIndex: 0
            },
            {
                question: "What is the purpose of the `__init__` method in a class?",
                options: ["To initialize the class instance", "To define a method", "To create a loop", "To import a module"],
                answerIndex: 0
            },
            {
                question: "How do you import a module in Python?",
                options: ["import module_name", "include module_name", "require module_name", "load module_name"],
                answerIndex: 0
            }
        ]
    }
];