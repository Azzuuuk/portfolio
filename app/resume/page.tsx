'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/section-header'

export default function ResumePage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Professional Summary"
          title="Resume"
          description="Download my full resume or view it below"
          className="mb-8 text-center"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Download Button */}
          <div className="flex justify-center">
            <Button size="lg" variant="gradient" asChild>
              <a href="/resume.pdf" download="Azaan_Khan_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* PDF Viewer */}
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-[800px] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <p className="text-muted-foreground">
                    Resume preview placeholder
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Add your resume PDF to <code className="px-2 py-1 bg-background rounded">/public/resume.pdf</code>
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/resume.pdf" download="Azaan_Khan_Resume.pdf">
                      Download Resume
                    </a>
                  </Button>
                </div>
                {/* Uncomment when you add your resume PDF:
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Azaan Khan Resume"
                />
                */}
              </div>
            </CardContent>
          </Card>

          {/* Alternative Links */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              You can also view my profile on{' '}
              <a
                href="https://linkedin.com/in/azaankhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
