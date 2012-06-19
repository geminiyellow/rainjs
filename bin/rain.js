#!/usr/bin/env node

//Copyright © 2012 rainjs
////
//// All rights reserved
////
//// Redistribution and use in source and binary forms, with or without modification, are permitted
//// provided that the following conditions are met:
////
////    1. Redistributions of source code must retain the above copyright notice, this list of
////       conditions and the following disclaimer.
////    2. Redistributions in binary form must reproduce the above copyright notice, this list of
////       conditions and the following disclaimer in the documentation and/or other materials
////       provided with the distribution.
////    3. Neither the name of The author nor the names of its contributors may be used to endorse or
////       promote products derived from this software without specific prior written permission.
////
//// THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
//// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
//// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
//// SHALL THE AUTHOR AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
//// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
//// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
//// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
//// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
//// IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var program = require('commander'),
    path = require('path'),
    util = require('../lib/util');

var root = path.dirname(__dirname);

program
    .version(require(path.join(root, 'package.json')).version)
    .usage('[options] <command>')
    .option('-c, --conf <path>', 'start the server with a custom configuration file', 'server.conf.default')
    .option('-D, --dir <path>', 'the server working directory', root);

util.walkSync(path.join(__dirname, 'commands'), ['.js'], function(file, folder) {
    var command = require(file);

    command(program);
});

program.parse(process.argv);
