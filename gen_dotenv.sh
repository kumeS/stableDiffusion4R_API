#!/bin/sh

#参考サイト: https://www.server-memo.net/shellscript/file_check.html
#参考サイト: http://www.ajisaba.net/sh/get_dir.html
#参考サイト: https://tech.kurojica.com/archives/20987/
#参考サイト: https://qiita.com/richmikan@github/items/eefbaed716e5ed198973
#参考サイト: http://tech.clickyourstyle.com/articles/23
#参考サイト: https://qiita.com/take4s5i/items/e207cee4fb04385a9952

CURRENT=$(
    cd $(dirname $0)
    pwd
)

ROOTPATH="${CURRENT}/.env"
FRONTENDPATH="${CURRENT}/frontend/.env"

echo $ROOTPATH
echo $FRONTENDPATH

if [ ! -e $ROOTPATH ]; then
    touch $ROOTPATH
    cat <<EOT >$ROOTPATH
#*dev
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

#*pre
# NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

#*production
# NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
# CLOUDFLARE_TUNNEL_TOKEN=
EOT
else
    echo ./.env is already exits.
fi

if [ ! -e $FRONTENDPATH ]; then
    touch $FRONTENDPATH
    cat <<EOT >$FRONTENDPATH
#*dev
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

#*pre
# NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

#*production
# NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
EOT
else
    echo frontend/.env is already exits.
fi
