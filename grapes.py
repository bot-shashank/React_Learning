def scrapeWeb(url):
    response = request.get(url)
    content = response.content
    return content