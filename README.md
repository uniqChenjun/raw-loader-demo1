# raw-loader-demo1

When I use raw-loader, I found that  `import txt from './test.txt'` and `import txt from 'raw-loader!./test.txt'` have different output results. So I decide to make this demo to show the difference.



## `import txt from './test.txt'`

If you use `console.log` expression, you will see the original format of the `.txt` file like this:

```
> this text uses Markdown syntax, which can be combined with related library and rendered in a web page.
 
# Contact

- Email: your email address
- Github: your github homepage

# Profile

### your name

- briefly introduce yourself.
- briefly introduce yourself. 
- briefly introduce yourself.

# Projects

- describe your project, including links.
- describe your project, including links. 
- describe your project, including links
```

## `import txt from 'raw-loader!./test.txt'`

This output is not what you what:
```
module.exports = "> this text uses Markdown syntax, which can be combined with related library and rendered in a web page.\r\n\r\n# Contact\r\n\r\n- Email: your email address\r\n- Github: your github homepage\r\n\r\n# Profile\r\n\r\n### your name\r\n\r\n- briefly introduce yourself.\r\n- briefly introduce yourself.\r\n- briefly introduce yourself.\r\n\r\n# Projects\r\n\r\n- describe your project, including links.\r\n- describe your project, including links.\r\n- describe your project, including links."
```



