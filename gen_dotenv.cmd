@echo off

rem 参考サイト: https://qiita.com/shin1rok/items/efb5052ef5fb8138c26d
rem 参考サイト: https://qiita.com/plcherrim/items/8edf3d3d33a0ae86cb5c
rem 参考サイト: https://rainbow-engine.com/batch-folderfile-existcheck/
rem 参考サイト: https://setips.net/bat/bat-exist/
rem 参考サイト: https://note.alhinc.jp/n/n828e5d7a417f
rem 参考サイト: https://qiita.com/tera1707/items/e8c5cacac28b2cd7598f

if not exist %~dp0.env (
    type nul > ./.env
    echo #*dev>> ./.env
    echo NEXT_PUBLIC_API_URL=http://localhost:8787>> ./.env
    echo >> ./.env
    echo #*pre>> ./.env
    echo # NEXT_PUBLIC_API_URL=http://localhost:8000>> ./.env
    echo >> ./.env
    echo #*production>> ./.env
    echo # NEXT_PUBLIC_API_URL=http://localhost:8000>> ./.env
    echo # CLOUDFLARE_TUNNEL_TOKEN=>> ./.env
) else (
    echo .\.env is already exits.
)

if not exist %~dp0frontend\.env (
    type nul > ./frontend/.env
    echo #*dev>> ./.env
    echo NEXT_PUBLIC_API_URL=http://localhost:8787>> ./frontend/.env
    echo >> ./.env
    echo #*pre>> ./.env
    echo # NEXT_PUBLIC_API_URL=http://localhost:8000>> ./frontend/.env
    echo >> ./.env
    echo #*production>> ./.env
    echo # NEXT_PUBLIC_API_URL=http://localhost:8000>> ./frontend/.env
) else (
    echo frontend\.env is already exits.
)
