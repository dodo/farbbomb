
escape = (char) ->
    switch char
        when 35  then [101, 1] # \x23 → \x65\x01
        when 66  then [101, 2] # \x42 → \x65\x02
        when 101 then [101, 3] # \x65 → \x65\x03
        when 102 then [101, 4] # \x66 → \x65\x04
        else [char]

# ceiling \x42 T R G B W
# wall    \x42 X Y R G B
module.exports = (target, data) ->
    res = [66]
    p = (char) -> res = res.concat(escape char)

    if target is 'ceiling'
        switch data.t
            when   1   then p 240
            when   2   then p 241
            when   3   then p 242
            when   4   then p 243
            when 'all' then p 255
    else if target is 'wall'
        p data.x
        p data.y
    p data.r
    p data.g
    p data.b
    p data.w if target is 'ceiling'
    return new Buffer res
